pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t hello-world-app .'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    sh 'docker push hello-world-app'
                }
            }
        }
    }
}

