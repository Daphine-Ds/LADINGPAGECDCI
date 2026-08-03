# 🚀 Guia Prático: CI/CD com GitHub Actions e GitHub Pages

Bem-vindo ao repositório da atividade prática de **CI/CD**! Este projeto foi desenhado para demonstrar, na prática e em tempo real, como o código fonte sai da sua máquina e vai parar na nuvem de forma **100% automatizada**.

---

## 📌 O que é CI/CD?

**CI/CD** é um conjunto de práticas de desenvolvimento de software que visa integrar código e entregá-lo aos usuários de forma rápida, contínua e segura.

| Conceito | Nome | O que faz no nosso projeto? |
| :--- | :--- | :--- |
| **CI** | *Continuous Integration* (Integração Contínua) | Valida as alterações do código a cada `git push`, garante que a branch principal está estável e prepara os arquivos (*build*). |
| **CD** | *Continuous Deployment* (Implantação Contínua) | Pega o resultado validado da etapa de CI e publica automaticamente no ar (**GitHub Pages**) sem intervenção manual. |

---

## 🔄 Como funciona o nosso Pipeline?

Sempre que você altera o arquivo `index.html` ou adiciona uma nova funcionalidade, o fluxo abaixo é disparado automaticamente:

[ Desenvolvedor ]
│
▼ (git push origin main)
[ GitHub Repository ]
│
▼ (Gatilho automático)
[ 🤖 GitHub Actions Workflow ]
├── 🏗️ Job 1: Build (CI) ──> Baixa o código e empacota os arquivos estáticos
└── 🚀 Job 2: Deploy (CD) ─> Publica o pacote no GitHub Pages
│
▼
[ 🌐 Site Atualizado no Ar! ]