
import React from 'react';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    instructor: string;
    duration: string;
    students: number;
    rating: number;
    progress?: number;
    price?: number;
    status: 'active' | 'completed' | 'draft';
  };
  isEnrolled?: boolean;
}

const CourseCard = ({ course, isEnrolled = false }: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge 
            className="absolute top-3 left-3"
            variant={course.status === 'completed' ? 'default' : 'secondary'}
          >
            {course.category}
          </Badge>
          {course.status === 'completed' && (
            <Badge className="absolute top-3 right-3 bg-green-500">
              Completed
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="font-medium">{course.instructor}</span>
        </div>

        {isEnrolled && course.progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {course.students}
            </div>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
            {course.rating}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="w-full flex items-center justify-between">
          {course.price && !isEnrolled ? (
            <span className="text-2xl font-bold text-blue-600">${course.price}</span>
          ) : (
            <div />
          )}
          <Button 
            className="ml-auto"
            variant={isEnrolled ? "outline" : "default"}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            {isEnrolled ? 'Continue' : 'Enroll Now'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
