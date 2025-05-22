
import React, { useState } from 'react';
import Header from '@/components/Header';
import UserProfile from '@/components/UserProfile';
import CourseCard from '@/components/CourseCard';
import ProgressChart from '@/components/ProgressChart';
import QuizCard from '@/components/QuizCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Target, Award, TrendingUp } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data based on the ERD
  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      description: "Master modern React patterns, hooks, and state management with real-world projects.",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "Programming",
      instructor: "Sarah Chen",
      duration: "12 weeks",
      students: 1250,
      rating: 4.8,
      progress: 75,
      status: "active" as const
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      description: "Learn design thinking, prototyping, and user research methodologies.",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Design",
      instructor: "Mike Rodriguez",
      duration: "8 weeks",
      students: 890,
      rating: 4.7,
      progress: 45,
      status: "active" as const
    },
    {
      id: 3,
      title: "Data Science with Python",
      description: "Complete guide to data analysis, visualization, and machine learning.",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      category: "Data Science",
      instructor: "Dr. Emily Watson",
      duration: "16 weeks",
      students: 2100,
      rating: 4.9,
      progress: 100,
      status: "completed" as const
    }
  ];

  const availableCourses = [
    {
      id: 4,
      title: "Digital Marketing Mastery",
      description: "Comprehensive course covering SEO, social media, and content marketing strategies.",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      category: "Marketing",
      instructor: "Lisa Park",
      duration: "10 weeks",
      students: 750,
      rating: 4.6,
      price: 199,
      status: "active" as const
    },
    {
      id: 5,
      title: "Cloud Computing with AWS",
      description: "Learn cloud architecture, deployment, and management on Amazon Web Services.",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "Cloud Computing",
      instructor: "James Wilson",
      duration: "14 weeks",
      students: 1650,
      rating: 4.8,
      price: 299,
      status: "active" as const
    }
  ];

  const recentQuizzes = [
    {
      id: 1,
      title: "React Hooks Assessment",
      description: "Test your knowledge of useState, useEffect, and custom hooks",
      timeLimit: 45,
      passingScore: 80,
      attempts: 1,
      maxAttempts: 3,
      lastScore: 92,
      status: "completed" as const
    },
    {
      id: 2,
      title: "Design Principles Quiz",
      description: "Evaluate your understanding of color theory, typography, and layout",
      timeLimit: 30,
      passingScore: 75,
      attempts: 0,
      maxAttempts: 2,
      status: "not_started" as const
    }
  ];

  const stats = [
    { title: "Courses Completed", value: "8", icon: Target, color: "text-green-600", bg: "bg-green-100" },
    { title: "Hours Learned", value: "124", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Certificates Earned", value: "5", icon: Award, color: "text-yellow-600", bg: "bg-yellow-100" },
    { title: "Skill Points", value: "2,450", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-100" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">Continue your learning journey and achieve your goals.</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-96">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="browse">Browse</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <Card key={stat.title}>
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-lg ${stat.bg}`}>
                            <stat.icon className={`h-6 w-6 ${stat.color}`} />
                          </div>
                          <div className="ml-4">
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm text-gray-600">{stat.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Progress Charts */}
                <ProgressChart />

                {/* Continue Learning */}
                <Card>
                  <CardHeader>
                    <CardTitle>Continue Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {enrolledCourses.slice(0, 2).map((course) => (
                        <CourseCard key={course.id} course={course} isEnrolled={true} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* User Profile */}
                <UserProfile />

                {/* Recent Quizzes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Quizzes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentQuizzes.map((quiz) => (
                      <QuizCard key={quiz.id} quiz={quiz} />
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Enrolled Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map((course) => (
                    <CourseCard key={course.id} course={course} isEnrolled={true} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="browse" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Discover New Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableCourses.map((course) => (
                    <CourseCard key={course.id} course={course} isEnrolled={false} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quizzes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Quizzes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentQuizzes.map((quiz) => (
                    <QuizCard key={quiz.id} quiz={quiz} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
