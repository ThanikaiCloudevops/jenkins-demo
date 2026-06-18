def call() {
    stage('Docker Build') {
        echo "=================================="
        echo "Building Docker Image..."
        echo "docker build -t demo-app:latest ."
        echo "Image Built Successfully"
        echo "=================================="
    }
}