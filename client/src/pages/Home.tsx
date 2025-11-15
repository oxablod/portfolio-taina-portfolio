import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, ExternalLink, Download } from "lucide-react";

export default function Home() {
  const skills = [
    { category: "Backend", items: ["Java", "SpringBoot", "Node.js", "REST APIs"] },
    { category: "Frontend", items: ["Angular", "React", "Flutter", "HTML/CSS/JS"] },
    { category: "Databases", items: ["Oracle", "PostgreSQL", "MySQL", "SQL Server", "FireBird"] },
    { category: "Methodologies", items: ["Scrum", "Kanban", "Agile", "Git"] },
  ];

  const experience = [
    {
      title: "Desenvolvedor Java Sr",
      company: "Xpert",
      location: "Pato Branco",
      period: "Fevereiro 2025 - Atual",
      highlights: [
        "Liderança do ciclo completo de desenvolvimento de aplicativo nativo para frentistas em terminais POS",
        "Integração profunda com máquinas POS existentes: comunicação serial, protocolos proprietários e APIs de pagamento",
        "Centralização e digitalização integral do processo de venda e abastecimento com ganhos significativos de eficiência operacional",
        "Implementação de rotinas sistêmicas críticas para gestão de dados e conformidade regulatória nas operações de frente de caixa",
        "Desenvolvimento em Java 8 até Java 21 (LTS) com foco em performance e segurança",
      ],
    },
    {
      title: "Desenvolvedor FullStack Sênior",
      company: "Mirante Tecnologia",
      location: "Brasília",
      period: "Agosto 2022 - Fevereiro 2025",
      highlights: [
        "Desenvolvimento de novas aplicações e melhorias em sistemas existentes",
        "Liderança de equipe e orientação para estagiários e juniors",
        "Alinhamentos com cliente e definição de tecnologias",
        "Java, Angular, Git, metodologias ágeis",
      ],
    },
    {
      title: "Programador de Internet",
      company: "CISS",
      location: "Dois Vizinhos",
      period: "Fevereiro 2022 - Outubro 2022",
      highlights: [
        "Desenvolvimento back-end e front-end de aplicações web",
        "Criação de sites com HTML, CSS, JavaScript",
        "Java (SpringBoot) e Flutter para aplicações cliente",
        "Testes e correção de erros",
      ],
    },
    {
      title: "Analista de Sistemas",
      company: "Grupo Bianchi",
      location: "Pato Branco",
      period: "Dezembro 2020 - Fevereiro 2022",
      highlights: [
        "Desenvolvimento de aplicativos para conferência de entrada/saída",
        "Aplicativo para clientes acompanharem faturas",
        "Implantação de sistema ERP",
        "Análise de requisitos e discussão de soluções",
      ],
    },
  ];

  const education = [
    {
      title: "Governança em TI",
      institution: "UniBF",
      year: "2023",
      status: "Concluído",
    },
    {
      title: "Liderança e Gestão de Times Ágeis",
      institution: "IEL",
      year: "2022",
      status: "Certificado Online",
    },
    {
      title: "Desenvolvimento em Aplicações WEB",
      institution: "UniBF",
      year: "2020",
      status: "Concluído",
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "FADEP",
      year: "2017",
      status: "Concluído",
    },
  ];

  const projects = [
    {
      name: "bip-teste-integrado",
      description: "Projeto de testes integrados",
      language: "JavaScript",
      updated: "Oct 2025",
      url: "https://github.com/oxablod/bip-teste-integrado",
    },
    {
      name: "teste53",
      description: "Aplicação Java de testes",
      language: "Java",
      updated: "Jan 2024",
      url: "https://github.com/oxablod/teste53",
    },
    {
      name: "HTML-TABLE-TO-JSON",
      description: "Conversão de tabelas HTML para JSON",
      language: "HTML",
      updated: "Mar 2020",
      url: "https://github.com/oxablod/HTML-TABLE-TO-JSON",
    },
    {
      name: "AngularNivel1",
      description: "Projeto Angular nível 1",
      language: "Angular",
      updated: "Mar 2017",
      url: "https://github.com/oxablod/AngularNivel1",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="container flex items-center justify-between py-4">
          <div className="text-xl font-bold text-primary">Tainã Rodrigues</div>
          <div className="flex gap-4">
            <a href="#sobre" className="text-sm hover:text-primary transition">Sobre</a>
            <a href="#experiencia" className="text-sm hover:text-primary transition">Experiência</a>
            <a href="#habilidades" className="text-sm hover:text-primary transition">Habilidades</a>
            <a href="#projetos" className="text-sm hover:text-primary transition">Projetos</a>
            <a href="#contato" className="text-sm hover:text-primary transition">Contato</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-transparent py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Tainã Rodrigues Lisboa</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Desenvolvedor Full-Stack com 10 anos de experiência em arquitetura de sistemas e desenvolvimento de soluções escaláveis. Especialista em Java, Flutter, Angular e Node.js.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild>
                <a href="mailto:tainalisboa@hotmail.com" className="flex items-center gap-2">
                  <Mail size={18} /> Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/tainã-l-332ba2180" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/oxablod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={18} /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 border-b border-border">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Resumo Profissional</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Profissional comprometido com 10 anos de experiência em desenvolvimento de projetos complexos e arquitetura de sistemas. Domínio das linguagens Java, Flutter e Angular, contribuindo para a entrega eficiente de soluções escaláveis.
                </p>
                <p>
                  Eficiente com boas habilidades de relacionamento interpessoal. Capaz de apoiar equipe em tarefas diversas e colaborar efetivamente com a rotina de trabalho, prestando um serviço de excelência.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Data de Nascimento</p>
                  <p className="font-medium">03 de Setembro de 1994</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Nacionalidade</p>
                  <p className="font-medium">Brasileira</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Estado Civil</p>
                  <p className="font-medium">Solteiro</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-medium">Pato Branco, PR</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-16 border-b border-border">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Competências Principais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Trabalho em Equipe</p>
                    <p className="text-sm text-muted-foreground">Colaboração efetiva e comunicação clara</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Metodologias Ágeis</p>
                    <p className="text-sm text-muted-foreground">Scrum, Kanban e práticas modernas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Gestão de Tempo</p>
                    <p className="text-sm text-muted-foreground">Priorização e cumprimento de prazos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Aprimoramento Contínuo</p>
                    <p className="text-sm text-muted-foreground">Iniciativa para buscar novos conhecimentos</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className="py-16 border-b border-border">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Experiência Profissional</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {job.company} • {job.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{job.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formação Section */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Formação Acadêmica</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.title}</CardTitle>
                  <CardDescription>{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                    <Badge>{edu.status}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-16 border-b border-border">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Projetos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:border-primary transition">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Badge variant="outline">{project.language}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{project.updated}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink size={16} /> Ver
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <a href="https://github.com/oxablod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={18} /> Ver todos os projetos no GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-primary/5">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
          <Card>
            <CardHeader>
              <CardTitle>Vamos conversar!</CardTitle>
              <CardDescription>
                Estou aberto a novas oportunidades e projetos desafiadores. Sinta-se à vontade para entrar em contato.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button asChild className="w-full" size="lg">
                  <a href="mailto:tainalisboa@hotmail.com" className="flex items-center gap-2">
                    <Mail size={20} /> tainalisboa@hotmail.com
                  </a>
                </Button>
                <div className="flex gap-4">
                  <Button asChild variant="outline" className="flex-1">
                    <a href="https://linkedin.com/in/tainã-l-332ba2180" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Linkedin size={18} /> LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="https://github.com/oxablod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={18} /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2025 Tainã Rodrigues Lisboa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
