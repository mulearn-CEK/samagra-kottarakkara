'use client';

import { useState } from 'react';

type Institution = {
  name: string;
  type: 'Government' | 'Aided' | 'Private';
};

type SchoolsData = {
  schools: Institution[];
  colleges: Institution[];
  others: Institution[];
};

type TabType = keyof SchoolsData;

export default function EducationalInstitutions() {
  const [activeTab, setActiveTab] = useState<TabType>('schools');

  const schoolsData: SchoolsData = {
    schools: [
        { name: "Govt. L. P. S Avannoor", type: "Government" },
        { name: "Govt. L. P. S Cherupoika", type: "Government" },
        { name: "Govt. L. P. S Ezhukone", type: "Government" },
        { name: "Govt. L. P. S Irumpanangadu", type: "Government" },
        { name: "Govt. Co-op L. P. S Irumpanangadu", type: "Government" },
        { name: "Govt. L. P. S Kaithacode", type: "Government" },
        { name: "Govt. L. P. S Karikkal", type: "Government" },
        { name: "Govt. L. P. S Karickom", type: "Government" },
        { name: "L.P.G.S Kizhakkemaranadu", type: "Government" },
        { name: "Govt. L. P. S Kokkadu", type: "Government" },
        { name: "Govt. L. P. S Thekkumpuram", type: "Government" },
        { name: "Govt. L. P. S Kottavattom", type: "Government" },
        { name: "Govt. L. P. S Thevalappuram", type: "Government" },
        { name: "L.P.G.S Thrikkannamangal", type: "Government" },
        { name: "B.V.L.P.S Vallom", type: "Government" },
        { name: "S.K.V.L.P.S Kuzhikkalidavaka", type: "Government" },
        { name: "Govt. L. P. S Vettikkavala", type: "Government" },
        { name: "Govt. W.L. P. S Airukuzhy", type: "Government" },
        { name: "Govt. W.L. P. S Cherupoika", type: "Government" },
        { name: "Govt. W.L. P. S Chittacode", type: "Government" },
        { name: "Govt. W.L. P. S Kamukinkottubhagom", type: "Government" },
        { name: "Govt. W.L. P. S East Maranadu", type: "Government" },
        { name: "Govt. W.L. P. S Panaveli", type: "Government" },
        { name: "Govt. W.L. P. S Pangode", type: "Government" },
        { name: "Govt. W.L. P. S Thevalappuram", type: "Government" },
        { name: "Govt. W.L. P. S Vettikkavala", type: "Government" },
        { name: "L.P.S Annoor", type: "Aided" },
        { name: "S.V.M.L.P.S Areekkalbhagom", type: "Aided" },
        { name: "M.T.S.S.L.P.S Chengamanadu", type: "Aided" },
        { name: "L.P.S Edavattom", type: "Aided" },
        { name: "Little Flower Bethany L P S Karuvelil", type: "Aided" },
        { name: "M.T.L.P.S Kizhakkekara", type: "Aided" },
        { name: "St.Mary`s M.S.C L.P.S Kizhakkekara", type: "Aided" },
        { name: "M.T.L.P.S Kolannoor", type: "Aided" },
        { name: "M.T.S.S.L.P.S Kottavattom", type: "Aided" },
        { name: "L.M.S L.P.S Maranadu", type: "Aided" },
        { name: "M.S.C L.P.S Neeleswaram", type: "Aided" },
        { name: "L.M.S L.P.S Nellikkunnam", type: "Aided" },
        { name: "S.C.V.L.P.S Pavithreswaram", type: "Aided" },
        { name: "C.V.N.M.L.P.S Thrikkannamangal", type: "Aided" },
        { name: "L.M.S L.P.S Villoor", type: "Aided" },
        { name: "Vimalambika L.P.S Kottarakkara", type: "Aided" },
        { name: "Mar Baselious Eng Medium L.P.S Pulamon", type: "Private" },
        { name: "Mannam Memmorial Eng Medium L.P.S Padinjattinkara", type: "Private" },
        { name: "St.George English Medium L.P.S Puthoor", type: "Private" },
        { name: "St.Thevedorse L.P.S Madhavassery", type: "Private" },
        { name: "St.Mary`s E.M.L.P.S Kizhakkekara", type: "Private" },
        { name: "Govt. L. P. S Anakkottoor", type: "Government" },
        { name: "Govt. M.T.L. P. S Chengamanadu", type: "Government" },
        { name: "Govt. U.P L. P. S Irumpanangadu", type: "Government" },
        { name: "Govt W.U.P.S Ampalappuram", type: "Government" },
        { name: "Govt U.P.S Kokkadu", type: "Government" },
        { name: "Town U.P.S Kottarakkara", type: "Government" },
        { name: "Govt U.P.S Melila", type: "Government" },
        { name: "Govt U.P.S Padinjattinkara", type: "Government" },
        { name: "Govt U.P.S Pazhayatheruvu", type: "Government" },
        { name: "D.V.N.S.S U.P.S Annoor", type: "Aided" },
        { name: "U.P.S Chethady", type: "Aided" },
        { name: "U.P.S Kottathala", type: "Aided" },
        { name: "G.V.S.U.P.S Kuzhikkalidavaka", type: "Aided" },
        { name: "M.N.U.P.S Nedumpaikulam", type: "Aided" },
        { name: "D.V U.P.S Neduvathoor", type: "Aided" },
        { name: "Mar Baselious U.P.S Pulamon", type: "Aided" },
        { name: "M.T.S.S U.P.S Punalur Bathel Narikkal", type: "Aided" },
        { name: "U.P.S Thevalappuram", type: "Aided" }
    
    ],
    colleges: [
      { name: "College of Engineering", type: "Government" },

      { name: "College of Applied Science", type: "Government" },
      { name: "Government Polytechnic College", type: "Government" },
      { name: "Industrial Training Institute", type: "Government" }
    ],
    others: [
      { name: "Technical Training Centers", type: "Private" },
      { name: "Vocational Training Institutes", type: "Private" },
      { name: "Skill Development Centers", type: "Private" }
    ]
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient">Educational Institutions</h2>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            {['schools', 'colleges', 'others'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabType)}
                className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-colors
                  ${activeTab === tab 
                    ? 'bg-sage-600 text-white' 
                    : 'text-gray-600 hover:text-sage-600'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schoolsData[activeTab].map((institution, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border border-gray-100 hover:border-sage-200 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-sage-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-800 font-medium mb-1">{institution.name}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      institution.type === 'Government' 
                        ? 'bg-blue-50 text-blue-600'
                        : institution.type === 'Aided'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-purple-50 text-purple-600'
                    }`}>
                      {institution.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 