def call() {
    stage('Deploy Application') {
        echo "=================================="
        echo "Deploying Application..."
        echo "kubectl apply -f deployment.yaml"
        echo "Deployment Successful"
        echo "=================================="
    }
}