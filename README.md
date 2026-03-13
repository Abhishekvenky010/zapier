# Zapier Clone - Automation Platform

A modern automation platform inspired by Zapier, built with Next.js, TypeScript, and a microservices architecture. Create Zaps to automate workflows by connecting triggers and actions.

## Project Architecture

The project follows a microservices architecture with four main components:

### 1. Frontend (`/frontend`)
- **Technology Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS, Axios
- **Port**: 3000 (default)
- **Description**: User interface for creating, managing, and monitoring Zaps. Features a modern, responsive design with a drag-and-drop interface (planned).

### 2. Hooks Service (`/hooks`)
- **Technology Stack**: Express.js, TypeScript, Prisma, PostgreSQL
- **Port**: 3002
- **Description**: Handles incoming webhook requests from external services, validates them, and triggers Zaps by creating entries in the outbox.

### 3. Processor (`/processor`)
- **Technology Stack**: TypeScript, Prisma, KafkaJS, PostgreSQL
- **Description**: Monitors the outbox for new Zap runs and publishes events to Kafka for processing.

### 4. Worker (`/worker`)
- **Technology Stack**: TypeScript, Prisma, KafkaJS, Solana Web3.js, Nodemailer
- **Description**: Consumes events from Kafka, executes actions (email, Solana transactions), and manages the workflow state.

## Features

### Current Features
- **User Authentication**: Sign up, login, and logout functionality
- **Zap Creation**: Visual interface to create Zaps with triggers and actions
- **Available Triggers**: 
  - Webhook trigger
- **Available Actions**:
  - Send email (via Nodemailer)
  - Send SOL (Solana blockchain transactions)
- **Zap Management**: Dashboard to view and manage created Zaps
- **Webhook Handling**: Receive and process webhook requests
- **Email Notifications**: Send emails using Nodemailer
- **Solana Transactions**: Send SOL tokens to addresses
- **Workflow Processing**: Background processing with Kafka and workers

### Planned Features (TODOS)
1. **Email Verification**: Verify user emails before allowing login
2. **Password Reset**: Allow users to reset passwords via email
3. **Solana Reconciliation**: Handle failed/delayed Solana transactions
4. **React Flow UI**: Improve Zap creation with visual workflow builder
5. **Parallel Actions**: Support for parallel execution of actions

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL
- Kafka (for event streaming)
- Solana wallet (for SOL transactions)
- Email service credentials (for sending emails)

### Installation

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Hooks Service
```bash
cd hooks
npm install
npm run dev
```

#### Processor
```bash
cd processor
npm install
npm run dev
```

#### Worker
```bash
cd worker
npm install
npm run dev
```

### Configuration

#### Environment Variables
Create a `.env` file in the worker directory with the following variables:

```
SOLANA_PRIVATE_KEY=your-solana-private-key
SOLANA_RPC_ENDPOINT=https://api.devnet.solana.com
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

#### Database Setup
Each service has its own Prisma schema. Run the following commands in each service directory:

```bash
npx prisma migrate dev
npx prisma generate
```

## Usage

### Creating a Zap
1. Sign up or log in to your account
2. Navigate to the dashboard
3. Click "Create" to start building a new Zap
4. Select a trigger (currently only webhook is available)
5. Add actions (email or Solana transaction)
6. Configure each action with required parameters
7. Publish the Zap

### Triggering a Zap
- Use the generated webhook URL to trigger your Zap
- Send a POST request to the webhook URL with the required data

## Architecture Diagrams

### Zap Execution Flow
```
Webhook → Hooks Service → Database (outbox) → Processor → Kafka → Worker → Execute Action
```

### Data Flow
1. User creates a Zap via the frontend
2. Zap configuration is stored in the database
3. Webhook trigger receives an event
4. Hook service creates a Zap run entry in the database
5. Processor picks up the new entry from the outbox
6. Processor publishes an event to Kafka
7. Worker consumes the event from Kafka
8. Worker executes the configured actions
9. Worker updates the Zap run status

## Technologies Used

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios

### Backend Services
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- KafkaJS (Apache Kafka)
- Nodemailer
- Solana Web3.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Create a pull request

## License

This project is licensed under the ISC License.

## Contact

For questions or feedback, please reach out to the development team.
