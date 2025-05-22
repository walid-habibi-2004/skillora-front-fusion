
import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface QuizCardProps {
  quiz: {
    id: number;
    title: string;
    description: string;
    timeLimit: number;
    passingScore: number;
    attempts: number;
    maxAttempts: number;
    lastScore?: number;
    status: 'not_started' | 'in_progress' | 'completed' | 'failed';
  };
}

const QuizCard = ({ quiz }: QuizCardProps) => {
  const getStatusIcon = () => {
    switch (quiz.status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'failed':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-blue-600" />;
    }
  };

  const getStatusBadge = () => {
    switch (quiz.status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      case 'in_progress':
        return <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Not Started</Badge>;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {getStatusIcon()}
            <CardTitle className="text-lg">{quiz.title}</CardTitle>
          </div>
          {getStatusBadge()}
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">Time Limit:</span>
            <p className="font-medium">{quiz.timeLimit} minutes</p>
          </div>
          <div>
            <span className="text-gray-500">Passing Score:</span>
            <p className="font-medium">{quiz.passingScore}%</p>
          </div>
          <div>
            <span className="text-gray-500">Attempts:</span>
            <p className="font-medium">{quiz.attempts}/{quiz.maxAttempts}</p>
          </div>
          {quiz.lastScore && (
            <div>
              <span className="text-gray-500">Last Score:</span>
              <p className="font-medium">{quiz.lastScore}%</p>
            </div>
          )}
        </div>

        <Button 
          className="w-full" 
          disabled={quiz.attempts >= quiz.maxAttempts && quiz.status !== 'completed'}
          variant={quiz.status === 'completed' ? 'outline' : 'default'}
        >
          {quiz.status === 'completed' 
            ? 'Review Quiz' 
            : quiz.status === 'in_progress' 
            ? 'Continue Quiz' 
            : 'Start Quiz'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
