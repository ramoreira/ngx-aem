pipeline {
  agent any
  stages {
    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            echo 'Hello World'
          }
        }
        stage('Build') {
          steps {
            sh 'mvn clean deploy'
          }
        }
      }
    }
  }
}