import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Metrics: React.FC = () => {
  const { performance_metrics } = PORTFOLIO_DATA;

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Performance Protocol</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Quantifiable impact generated through strategic optimization cycles.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {performance_metrics.map((item, idx) => {
            // Transform data for Recharts
            // We want to show Before vs After for each metric
            // This is complex for a simple bar chart if units differ.
            // Strategy: Render separate mini-charts or normalized values?
            // Better: Customized visualization for each metric in the project.
            
            return (
              <div key={idx} className="bg-slate-950 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-4">
                  {item.project}
                </h3>
                
                <div className="space-y-8">
                  {item.data.map((metric, mIdx) => {
                     const chartData = [
                      { name: 'Before', value: Number(metric.before) },
                      { name: 'After', value: Number(metric.after) },
                    ];
                    
                    const isImprovement = Number(metric.after) > Number(metric.before) || metric.label === "CPA" || metric.label === "CPL"; 
                    // Note: Logic implies 'higher is better' usually, unless CPA/CPL. 
                    // Visualizing strictly magnitude here.
                    
                    return (
                      <div key={mIdx} className="w-full">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                            {metric.label}
                          </span>
                          <span className="text-xs text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded">
                             {metric.unit === '$' ? '-' : '+'}{Math.abs(((Number(metric.after) - Number(metric.before)) / Number(metric.before)) * 100).toFixed(0)}%
                          </span>
                        </div>
                        
                        <div className="h-24 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={chartData} margin={{ left: 0, right: 30 }}>
                              <XAxis type="number" hide />
                              <YAxis 
                                dataKey="name" 
                                type="category" 
                                axisLine={false} 
                                tickLine={false}
                                width={50}
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                              />
                              <Tooltip 
                                cursor={{fill: 'transparent'}}
                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }}
                                itemStyle={{ color: '#fff' }}
                              />
                              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={16}>
                                {chartData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={index === 1 ? '#38bdf8' : '#334155'} />
                                ))}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="flex justify-between px-12 text-xs font-mono text-slate-500 -mt-2">
                          <span>
                            {metric.unit === '$' ? '$' : ''}{metric.before}{metric.unit !== '$' ? metric.unit : ''}
                          </span>
                          <span className="text-white">
                             {metric.unit === '$' ? '$' : ''}{metric.after}{metric.unit !== '$' ? metric.unit : ''}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metrics;