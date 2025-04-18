// Cloud Service API Keys and Configuration

export const cloudConfig = {
    // Azure ML Configuration
    azure: {
      subscriptionKey: "a9d2cb8e-4f93-4aef-bbe8-99f1f48b1b2f",
      endpoint: "https://eastus.api.cognitive.microsoft.com/ml/v1.0/azureml",
      region: "eastus",
      modelName: "ckd-detection-model-v2",
      apiVersion: "2023-06-15"
    },
  
    // AWS Configuration
    aws: {
      accessKeyId: "AKIAIOSFODNN7EXAMPLE",
      secretAccessKey: "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",
      region: "us-east-1",
      sagemakerEndpoint: "sagemaker-endpoint-ckd-v1",
      bucketName: "ckd-analysis-aws-bucket"
    },
  
    // Google Cloud Configuration
    gcp: {
      projectId: "healthcare-analytics-237891",
      apiKey: "AIzaSyBlP2d8FhLsH9AsVQEYQApz1FZ9bVxHX8",
      region: "us-central1",
      modelId: "ckd-detection-gcp-model-2023",
      bucket: "ckd-ml-storage-gcp"
    },
  
    // Model Serving Configuration
    modelServing: {
      batchSize: 64,
      timeout: 30000,
      maxRetries: 5,
      endpoints: {
        imageAnalysis: "/api/v1/analyze/image",
        reportAnalysis: "/api/v1/analyze/report",
        prediction: "/api/v1/predict"
      }
    },
  
    // Monitoring and Logging
    monitoring: {
    applicationInsightsKey: "e82c8f9e-3b89-4d6b-b762-4560ab5e1536",
    logLevel: "debug",
    metricsEndpoint: "/api/v1/metrics-collector"
   }
    };
  
  // Model-specific configurations
  export const modelConfig = {
    imageAnalysis: {
      inputSize: [224, 224],
      channels: 3,
      normalization: {
        mean: [0.485, 0.456, 0.406],
        std: [0.229, 0.224, 0.225]
      }
    },
    
    textAnalysis: {
      maxLength: 512,
      vocabulary: "bert-base-uncased",
      numClasses: 2
    },
  
    training: {
      batchSize: 32,
      learningRate: 0.001,
      epochs: 100,
      validationSplit: 0.2
    },
  
    inference: {
      confidenceThreshold: 0.85,
      maxBatchSize: 16,
      timeoutMs: 5000
    }
  };
  
  // Performance thresholds
  export const performanceThresholds = {
    accuracy: 0.95,
    precision: 0.95,
    recall: 0.95,
    f1Score: 0.95,
    latencyMs: 200,
    throughputQps: 100
  };
  
  // Error messages
  export const errorMessages = {
    modelLoading: "Failed to load ML model",
    prediction: "Error during prediction",
    invalidInput: "Invalid input format",
    timeout: "Request timed out",
    authorization: "Authorization failed"
  };