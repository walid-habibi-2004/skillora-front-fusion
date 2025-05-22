
import React from 'react';
import { Award, BookOpen, Calendar, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const UserProfile = () => {
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    role: "STUDENT",
    avatar: "/lovable-uploads/1c15380a-03d7-457b-a614-6f26cb40e2b1.png",
    enrolledCourses: 12,
    completedCourses: 8,
    certificates: 5,
    totalPoints: 2450
  };

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0">
      <CardHeader className="text-center pb-4">
        <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-white shadow-lg">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback className="text-xl font-semibold bg-blue-600 text-white">
            {user.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl text-gray-900">{user.name}</CardTitle>
        <p className="text-gray-600">{user.email}</p>
        <Badge variant="secondary" className="w-fit mx-auto mt-2">
          {user.role}
        </Badge>
      </CardHeader>
      
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{user.enrolledCourses}</div>
          <div className="text-sm text-gray-600">Enrolled Courses</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{user.completedCourses}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{user.certificates}</div>
          <div className="text-sm text-gray-600">Certificates</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{user.totalPoints}</div>
          <div className="text-sm text-gray-600">Total Points</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
