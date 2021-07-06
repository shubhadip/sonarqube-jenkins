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
					-D sonar.projectVersion='${env.BUILD_NUMBER}' \
					-D sonar.javascript.lcov.reportPaths=unitTests/coverage/lcov.info \
					-D sonar.sources=. \
					'''
				}
			}
		}
		// will not work locally, add webhook in sonar to work
		// https://jenkins:8080/sonarqube-webhook
		// doc: https://www.jenkins.io/doc/pipeline/steps/sonar/
		// stage('Quality Gate') {
		// 	steps{
		// 		script {
		// 			timeout(time: 5, unit: 'MINUTES') {
		// 				def qg = waitForQualityGate();
		// 				if (qg.status != 'OK') {
		// 					error "Pipeline aborted due to quality gate failure: ${qg.status}";
		// 					sh "exit 1";
		// 				}
		// 			}
		// 		}
		// 	}
		// }
	}
}