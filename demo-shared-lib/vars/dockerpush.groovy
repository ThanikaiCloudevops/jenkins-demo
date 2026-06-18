def call() {
    stage('Docker Login & Push') {
        echo "=================================="
        echo "Logging into Docker Hub..."
        echo "docker login"
        echo "Pushing Docker Image..."
        echo "docker push demo-app:latest"
        echo "=================================="
    }
}