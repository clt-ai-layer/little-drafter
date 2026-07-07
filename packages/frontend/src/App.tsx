import React, { useState } from 'react';
import { DrawingSession } from './features/drawing/components/DrawingSession';
import { TEMPLATES, type Template } from './features/drawing/templates/index';

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  // Group templates by category
  const templatesByCategory = TEMPLATES.reduce((acc, template) => {
    const cat = template.category || 'Autres';
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(template);
    return acc;
  }, {} as Record<string, Template[]>);

  const handleNextDrawing = () => {
    if (!selectedTemplate) return;
    const cat = selectedTemplate.category || 'Autres';
    const categoryTemplates = templatesByCategory[cat];
    const currentIndex = categoryTemplates.findIndex(t => t.id === selectedTemplate.id);
    // Loop back to the first drawing in the category if at the end
    const nextIndex = (currentIndex + 1) % categoryTemplates.length;
    setSelectedTemplate(categoryTemplates[nextIndex]);
  };

  if (selectedTemplate) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <DrawingSession 
          template={selectedTemplate} 
          onClose={() => setSelectedTemplate(null)} 
          onNextDrawing={handleNextDrawing}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-12 text-center drop-shadow-sm">
        Que devrions-nous dessiner ? 🎨
      </h1>
      
      <div className="w-full max-w-6xl flex flex-col space-y-12">
        {Object.entries(templatesByCategory).map(([category, templates]) => (
          <div key={category} className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pl-4 border-l-8 border-orange-400">
              {category}
            </h2>
            
            {/* Horizontal Scroll Container (Netflix Style) */}
            <div className="flex overflow-x-auto space-x-6 pb-6 px-4 snap-x snap-mandatory hide-scrollbar">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className="snap-start shrink-0 w-64 flex flex-col items-center justify-center p-6 bg-white border-4 border-blue-200 rounded-3xl shadow-md hover:border-blue-400 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors p-2">
                    {/* @ts-ignore */}
                    {template.steps[template.steps.length - 1]?.svg ? (
                      <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: (template.steps[template.steps.length - 1] as any).svg }} />
                    ) : (
                      <svg viewBox="0 0 400 400" className="w-full h-full" style={{ stroke: '#333333', strokeWidth: 1.5, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                        <g dangerouslySetInnerHTML={{ __html: template.steps.map(s => s.pathData || (s as any).svgPath || '').join('') }} />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {template.name}
                  </h3>
                  <p className="mt-2 text-gray-500 font-medium text-sm">
                    {template.steps.length} étapes
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
