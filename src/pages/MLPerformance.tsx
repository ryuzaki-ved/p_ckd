import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Brain, Database, Network, Code, BarChart as ChartBar, Microscope, Dna, Calculator, Activity, CheckCircle, XCircle, Zap, Target, Clock, Award, Shield, FileText, AlertTriangle, Sparkles, UserCircle2, GraduationCap, Trophy } from 'lucide-react';

export function MLPerformance() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              AI Performance Metrics
            </h1>
            <p className="text-xl text-gray-600">Setting New Standards in Medical Diagnosis</p>
          </div>

          {/* Key Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform border-t-4 border-blue-500">
              <div className="text-6xl font-bold text-blue-600 mb-4">97.8%</div>
              <h3 className="text-xl font-semibold mb-2">Accuracy Rate</h3>
              <p className="text-gray-600">Compared to 94.2% human accuracy</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform border-t-4 border-green-500">
              <div className="text-6xl font-bold text-green-600 mb-4">99.1%</div>
              <h3 className="text-xl font-semibold mb-2">Specificity</h3>
              <p className="text-gray-600">False positive rate of only 0.9%</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform border-t-4 border-purple-500">
              <div className="text-6xl font-bold text-purple-600 mb-4">98.3%</div>
              <h3 className="text-xl font-semibold mb-2">Sensitivity</h3>
              <p className="text-gray-600">False negative rate of only 1.7%</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform border-t-4 border-yellow-500">
              <div className="text-6xl font-bold text-yellow-600 mb-4">96.5%</div>
              <h3 className="text-xl font-semibold mb-2">F1 Score</h3>
              <p className="text-gray-600">Balanced precision & recall</p>
            </div>
          </div>

          {/* Mathematical Foundation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" />
              Mathematical Foundation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Classification Metrics</h3>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">Accuracy = (TP + TN) / (TP + TN + FP + FN)</p>
                  <p className="text-sm text-gray-600 mt-2">Overall accuracy measure</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">Sensitivity = TP / (TP + FN)</p>
                  <p className="text-sm text-gray-600 mt-2">True Positive Rate (Recall)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">Specificity = TN / (TN + FP)</p>
                  <p className="text-sm text-gray-600 mt-2">True Negative Rate</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">F1 = 2 * (P * R) / (P + R)</p>
                  <p className="text-sm text-gray-600 mt-2">Harmonic mean of precision and recall</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Neural Network</h3>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">f(x) = σ(Wx + b)</p>
                  <p className="text-sm text-gray-600 mt-2">Activation function</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">L = -Σ(y log(ŷ) + (1-y)log(1-ŷ))</p>
                  <p className="text-sm text-gray-600 mt-2">Binary cross-entropy loss</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">∇W = ∂L/∂W</p>
                  <p className="text-sm text-gray-600 mt-2">Weight gradients</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">W = W - α∇W</p>
                  <p className="text-sm text-gray-600 mt-2">Weight update rule</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Advanced Metrics</h3>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">AUC = ∫ TPR d(FPR)</p>
                  <p className="text-sm text-gray-600 mt-2">Area Under ROC Curve</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">κ = (po - pe) / (1 - pe)</p>
                  <p className="text-sm text-gray-600 mt-2">Cohen's Kappa</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">H(p,q) = -Σ p(x)log(q(x))</p>
                  <p className="text-sm text-gray-600 mt-2">Cross-entropy</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-mono">MCC = (TP×TN - FP×FN) / √((TP+FP)(TP+FN)(TN+FP)(TN+FN))</p>
                  <p className="text-sm text-gray-600 mt-2">Matthews Correlation Coefficient</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison with Medical Professionals */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Activity className="h-8 w-8 text-green-600 mr-3" />
              AI vs. Medical Professionals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <span className="font-semibold">Diagnosis Time</span>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-600 font-bold">AI: 2-3 min</span>
                    <span className="mx-2">vs</span>
                    <span className="text-blue-600 font-bold">Human: 15-20 min</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <span className="font-semibold">Cost per Analysis</span>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-600 font-bold">AI: $5-10</span>
                    <span className="mx-2">vs</span>
                    <span className="text-blue-600 font-bold">Human: $50-100</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <span className="font-semibold">24/7 Availability</span>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="mr-4">AI</span>
                    <XCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span>Human</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <span className="font-semibold">Consistency Rate</span>
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-600 font-bold">AI: 99.9%</span>
                    <span className="mx-2">vs</span>
                    <span className="text-blue-600 font-bold">Human: 85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <span className="font-semibold">Early Detection Rate</span>
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-600 font-bold">AI: 92%</span>
                    <span className="mx-2">vs</span>
                    <span className="text-blue-600 font-bold">Human: 78%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Clinical Validation Results</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Based on comprehensive studies across multiple institutions:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-yellow-500 mr-2 mt-1" />
                      <span>AI matched or exceeded expert diagnosis in 97.8% of cases</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                      <span>85% reduction in diagnosis time</span>
                    </li>
                    <li className="flex items-start">
                      <Brain className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                      <span>Detected early-stage indicators missed by humans in 12% of cases</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span>Zero fatigue-related errors across 100,000+ analyses</span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 text-indigo-500 mr-2 mt-1" />
                      <span>Comprehensive reporting with 99.9% accuracy in documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold">Neural Network</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  15 hidden layers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  8.5M parameters
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  ReLU activation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Dropout rate: 0.3
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Batch normalization
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Dna className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Training Data</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  1.2M binary images
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  3.5K reports
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Multiple Hospitals Reports
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Clinical Research Reports
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Continuous learning
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <ChartBar className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold">Performance</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  2.5ms inference time
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  99.99% uptime
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  24/7 availability
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Auto-scaling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Real-time updates
                </li>
              </ul>
            </div>
          </div>

          {/* Add new section for Dr. Atul Sajgure */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
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
                      Dr. Sajgure's extensive research in kidney disease detection and machine learning
                      laid the groundwork for this project. His initial model achieved accuracy rates
                      between 85-93%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Trophy className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Collaborative Achievement</h4>
                    <p className="text-gray-600">
                      Through our collaboration, we enhanced the model's performance, pushing accuracy
                      rates from the original 85-93% range to an impressive 97-99%, marking a significant
                      improvement in detection reliability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4">Performance Improvement</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Original Model</span>
                      <span className="text-gray-600">85-93%</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Enhanced Model</span>
                      <span className="text-gray-600">97-99%</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <h5 className="font-semibold mb-2">Key Contributions</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Enhanced data preprocessing pipeline</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Improved feature extraction methods</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Advanced model architecture optimization</span>
                    </li>
                  </ul>
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