import React, { useEffect, useRef } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { UserCircle2, GraduationCap, Trophy, Brain, Search, Users, Guitar as Hospital, Microscope, Code, Award, BarChart as ChartBar } from 'lucide-react';

export function OurStory() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      timelineItems.forEach(item => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Our Journey
            </h1>
            <p className="text-xl text-gray-600">The story of innovation and collaboration in kidney disease detection</p>
          </div>

          {/* Mentor Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-blue-100 rounded-full p-4 mb-4">
                <UserCircle2 className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Project Mentor & Collaborator</h2>
              <h3 className="text-xl font-semibold text-blue-600 mt-2">Dr. Atul Sajgure</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <GraduationCap className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Research Background</h4>
                    <p className="text-gray-600">
                      Dr. Sajgure's extensive research in kidney disease detection laid the foundation for
                      this project. His initial approach focused on single algorithm implementation,
                      achieving accuracy rates between 85-93%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Trophy className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Collaborative Evolution</h4>
                    <p className="text-gray-600">
                      Through our collaboration, we transformed the single-algorithm approach into a
                      multi-algorithm ensemble, pushing accuracy rates to 97-99%. This breakthrough
                      came from combining multiple AI models and advanced data processing techniques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4">Model Evolution</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Single Algorithm Approach</span>
                      <span className="text-gray-600">85-93%</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full animate-widthGrow" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Multi-Algorithm Ensemble</span>
                      <span className="text-gray-600">97-99%</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full animate-widthGrow" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="relative" ref={timelineRef}>
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 timeline-line"></div>
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {/* Problem Identification */}
              <div className="relative timeline-item">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg timeline-dot">
                    <div className="absolute inset-0 timeline-shimmer"></div>
                  </div>
                </div>
                <div className="ml-auto mr-8 md:mr-auto md:ml-8 w-full md:w-1/2 timeline-card">
                  <div className="flex items-center mb-4">
                    <Search className="h-6 w-6 text-blue-500 mr-3" />
                    <h3 className="text-xl font-semibold">The Challenge</h3>
                  </div>
                  <p className="text-gray-600">
                    We identified critical gaps in CKD detection: delayed diagnosis, inconsistent results,
                    and the need for more accurate early detection methods.
                  </p>
                  <div className="mt-4 text-sm text-gray-500">January 2023</div>
                </div>
              </div>

              {/* Initial Attempts */}
              <div className="relative timeline-item">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full border-4 border-white shadow-lg timeline-dot">
                    <div className="absolute inset-0 timeline-shimmer"></div>
                  </div>
                </div>
                <div className="mr-auto ml-8 md:ml-auto md:mr-8 w-full md:w-1/2 timeline-card">
                  <div className="flex items-center mb-4">
                    <Brain className="h-6 w-6 text-indigo-500 mr-3" />
                    <h3 className="text-xl font-semibold">Early Development</h3>
                  </div>
                  <p className="text-gray-600">
                    Our initial attempts faced challenges: limited dataset access, algorithm accuracy issues,
                    and the need for medical expertise validation.
                  </p>
                  <div className="mt-4 text-sm text-gray-500">March 2023</div>
                </div>
              </div>

              {/* Hospital Collaboration */}
              <div className="relative timeline-item">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-lg timeline-dot">
                    <div className="absolute inset-0 timeline-shimmer"></div>
                  </div>
                </div>
                <div className="ml-auto mr-8 md:mr-auto md:ml-8 w-full md:w-1/2 timeline-card">
                  <div className="flex items-center mb-4">
                    <Hospital className="h-6 w-6 text-purple-500 mr-3" />
                    <h3 className="text-xl font-semibold">Finding the Right Partner</h3>
                  </div>
                  <p className="text-gray-600">
                    After approaching multiple clinics and hospitals, we found our breakthrough
                    collaboration with Dr. Atul's Clinic, marking the beginning of our journey
                    towards innovation.
                  </p>
                  <div className="mt-4 text-sm text-gray-500">May 2023</div>
                </div>
              </div>

              {/* Algorithm Development */}
              <div className="relative timeline-item">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg timeline-dot">
                    <div className="absolute inset-0 timeline-shimmer"></div>
                  </div>
                </div>
                <div className="mr-auto ml-8 md:ml-auto md:mr-8 w-full md:w-1/2 timeline-card">
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-green-500 mr-3" />
                    <h3 className="text-xl font-semibold">Multi-Algorithm Innovation</h3>
                  </div>
                  <p className="text-gray-600">
                    We transformed the single-algorithm approach into a sophisticated multi-algorithm
                    ensemble, significantly improving detection accuracy and reliability.
                  </p>
                  <div className="mt-4 text-sm text-gray-500">July 2023</div>
                </div>
              </div>

              {/* Validation & Results */}
              <div className="relative timeline-item">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-white shadow-lg timeline-dot">
                    <div className="absolute inset-0 timeline-shimmer"></div>
                  </div>
                </div>
                <div className="ml-auto mr-8 md:mr-auto md:ml-8 w-full md:w-1/2 timeline-card">
                  <div className="flex items-center mb-4">
                    <ChartBar className="h-6 w-6 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold">Breakthrough Results</h3>
                  </div>
                  <p className="text-gray-600">
                    Clinical validation showed unprecedented accuracy improvements from 85-93% to 97-99%,
                    setting new standards in CKD detection.
                  </p>
                  <div className="mt-4 text-sm text-gray-500">September 2023</div>
                </div>
              </div>

              {/* Current Status */}
              <div className="relative timeline-item">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg timeline-dot">
                    <div className="absolute inset-0 timeline-shimmer"></div>
                  </div>
                </div>
                <div className="mr-auto ml-8 md:ml-auto md:mr-8 w-full md:w-1/2 timeline-card">
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-red-500 mr-3" />
                    <h3 className="text-xl font-semibold">Looking Forward</h3>
                  </div>
                  <p className="text-gray-600">
                    Today, we continue to refine our system, expand our dataset, and work towards
                    making advanced CKD detection accessible to healthcare providers worldwide.
                  </p>
                  <div className="mt-4 text-sm text-gray-500">Present</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}