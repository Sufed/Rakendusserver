pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = 'sufed'
        DOCKER_IMAGE_NAME = 'sufed/hello-world-app:latest'
    }

    stages {
        stage('Check Workspace') {
            steps {
                script {
                    sh 'pwd'
                    sh 'ls -la'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Сборка Docker образа в текущем рабочем каталоге
                    docker.build("${DOCKER_IMAGE_NAME}", "hello-world-app")
                }
            }
        }

        stage('Test Application') {
            steps {
                script {
                    // Запуск контейнера для тестирования
                    sh "docker run --rm ${DOCKER_IMAGE_NAME} npm test"
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Аутентификация и загрузка образа
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS) {
                        docker.image("${DOCKER_IMAGE_NAME}").push()
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                try {
                    sh "docker rmi ${DOCKER_IMAGE_NAME}"
                } catch (e) {
                    echo "Failed to remove image: ${e.getMessage()}"
                }
            }
        }
    }
}
