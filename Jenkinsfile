pipeline {
    agent any;
    tools{
        nodejs "node"
    }
    stages{
        stage("Prepare"){
            steps{
                sh "npm install";
                // sh "npm install -g yarn";
                // git url: "https://github.com/shubhadip/sonarqube-jenkins"; 
            }
        }
        stage("Lint"){
            steps{
                sh "npm run lint";
            }
        }
        stage("Test"){
            steps{
                sh "npm run test:unit";
            }
        }
        stage("Build"){
            steps{
                sh "npm run build";
            }
        }
        stage('SonarQube Analysis'){
          environment {
              scannerHome = tool 'sonarqube'
          }
          steps {
            withSonarQubeEnv(installationName: 'sonarqube', credentialsId: 'sonarqube-jenkins') {
              sh '''
              ${scannerHome}/bin/sonar-scanner \
              -D sonar.projectKey=sonarqube-jenkins \
              -D sonar.projectName=sonarqube-jenkins \
              -Dsonar.projectVersion='${env.BUILD_NUMBER}' \
              -D sonar.sources=. \
              '''
            }
          }
        }
        stage('Quality Gate') {
            steps{
                waitForQualityGate abortPipeline: true
            }
        }
    }
}