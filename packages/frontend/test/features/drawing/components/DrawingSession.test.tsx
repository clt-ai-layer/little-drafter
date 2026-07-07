import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { DrawingSession } from './DrawingSession';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    g: ({ children, ...props }: any) => <g {...props}>{children}</g>,
  },
}));

const mockTemplate = {
  id: 'lion-1',
  name: 'Friendly Lion',
  steps: [
    { index: 0, pathData: '<circle cx="50" cy="50" r="40" />', instruction: 'Draw a big head' },
    { index: 1, pathData: '<circle cx="30" cy="40" r="5" />', instruction: 'Draw one eye' },
    { index: 2, pathData: '<circle cx="70" cy="40" r="5" />', instruction: 'Draw the other eye' },
  ],
};

describe('DrawingSession', () => {
  it('renders the first step by default', () => {
    render(<DrawingSession template={mockTemplate} />);
    
    // Check header
    expect(screen.getByText(/Friendly Lion/i)).toBeDefined();
    
    // Check instruction
    expect(screen.getByText(/Draw a big head/i)).toBeDefined();
    
    // Check SVG groups visibility (mocked motion.g uses opacity style)
    const groups = document.querySelectorAll('g');
    expect(groups.length).toBe(3);
    expect(groups[0].style.opacity).toBe('1');
    expect(groups[1].style.opacity).toBe('0');
    expect(groups[2].style.opacity).toBe('0');
  });

  it('progresses to the next step when clicking Next', () => {
    render(<DrawingSession template={mockTemplate} />);
    
    const nextButton = screen.getByLabelText(/Next/i);
    fireEvent.click(nextButton);
    
    // Instruction should update
    expect(screen.getByText(/Draw one eye/i)).toBeDefined();
    
    // Visibility should update
    const groups = document.querySelectorAll('g');
    expect(groups[0].style.opacity).toBe('1');
    expect(groups[1].style.opacity).toBe('1');
    expect(groups[2].style.opacity).toBe('0');
  });

  it('goes back to the previous step when clicking Back', () => {
    render(<DrawingSession template={mockTemplate} />);
    
    const nextButton = screen.getByLabelText(/Next/i);
    const backButton = screen.getByLabelText(/Back/i);
    
    // Move to step 1
    fireEvent.click(nextButton);
    expect(screen.getByText(/Draw one eye/i)).toBeDefined();
    
    // Move back to step 0
    fireEvent.click(backButton);
    expect(screen.getByText(/Draw a big head/i)).toBeDefined();
    
    const groups = document.querySelectorAll('g');
    expect(groups[0].style.opacity).toBe('1');
    expect(groups[1].style.opacity).toBe('0');
  });

  it('disables Back button at the start', () => {
    render(<DrawingSession template={mockTemplate} />);
    
    const backButton = screen.getByLabelText(/Back/i);
    expect(backButton).toBeDisabled();
  });

  it('disables Next button at the end', () => {
    render(<DrawingSession template={mockTemplate} />);
    
    const nextButton = screen.getByLabelText(/Next/i);
    
    // Move to end (step 2)
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    
    expect(nextButton).toBeDisabled();
  });
});
