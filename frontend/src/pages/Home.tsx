import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Text from '../components/Text';

// Mock data for championships
interface Championship {
  id: string;
  name: string;
  sport: string;
  teams: number;
  startDate: string;
  status: 'active' | 'upcoming' | 'finished';
}

const mockChampionships: Championship[] = [
  {
    id: '1',
    name: 'Campeonato Brasileiro 2026',
    sport: 'Futebol',
    teams: 20,
    startDate: '15/04/2026',
    status: 'active',
  },
  {
    id: '2',
    name: 'Liga de Basquete Estadual',
    sport: 'Basquete',
    teams: 12,
    startDate: '01/05/2026',
    status: 'upcoming',
  },
  {
    id: '3',
    name: 'Torneio de Vôlei de Praia',
    sport: 'Vôlei',
    teams: 8,
    startDate: '10/03/2026',
    status: 'finished',
  },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div className="text-center">
        <Text variant="heading" className="mb-2">
          Bem-vindo, Coach!
        </Text>
        <Text variant="body" className="text-text-secondary max-w-xl mx-auto">
          Gerencie seus campeonatos com facilidade e praticidade.
        </Text>
      </div>

      {/* Call to Action Section */}
      <div className="bg-primary/5 rounded-lg p-6 text-center">
        <Text variant="heading" className="mb-4 text-white">
          Pronto para começar?
        </Text>
        <Text variant="body" className="mb-6 text-white/90 max-w-2xl mx-auto">
          Crie seu primeiro campeonato e convide seus times para competir.
        </Text>
        <Button variant="primary" size="lg">
          Criar Campeonato
        </Button>
      </div>

      {/* Recent Championships Section */}
      <section>
        <Text variant="heading" className="mb-4">
          Campeonatos Recentes
        </Text>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockChampionships.map((champ) => (
            <Card key={champ.id} variant="default" className="flex flex-col h-full">
              <div className="flex-grow">
                <Text variant="title" className="mb-2">
                  {champ.name}
                </Text>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {champ.sport}
                  </Badge>
                  <Badge variant={champ.status === 'active' ? 'success' : champ.status === 'upcoming' ? 'warning' : 'error'}>
                    {champ.status === 'active' ? 'Ativo' : champ.status === 'upcoming' ? 'Próximo' : 'Finalizado'}
                  </Badge>
                </div>
                <div className="space-y-2 text-text-secondary">
                  <div className="flex justify-between">
                    <span>Times:</span>
                    <span>{champ.teams}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Início:</span>
                    <span>{champ.startDate}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex-shrink-0">
                <Button variant="outline" size="sm" className="w-full">
                  Ver Detalhes
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;