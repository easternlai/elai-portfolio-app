const TechPage = () => {
    return (
        <div className="text-2xl font-light tracking-wide leading-10">
            <div className="mb-16">
                <div className="mt-4"><a className="font-bold">Devops: </a>The infrastructure for this portfolio app is deployed entirely on AWS. The app is running on a managed EKS cluster that uses AWS Application Load Balancer for Ingress.</div>
                <div className="mt-2 underline"><a target="_blank" href="https://github.com/easternlai/elai-portfolio-devops">devops github repo</a></div>
            </div>
            <div className="mb-20">
                <div className="mt-2"><a className="font-bold">Dev: </a>The portfolio web app was built with React Nextjs and uses Tailwind for styling.  </div>
                <div className="mt-6 underline"><a target="_blank" href="https://github.com/easternlai/elai-portfolio-app">NextJs github repo</a></div>
            </div>
            <div className="mb-16">
                <div className="mt-2"><a className="font-bold">CI/CD: </a>Github Actions is used to automate the deployment of the web app. When a pull request is made to the main branch, GHA will trigger the creation of a new docker image that is then pushed to AWS ECR and deployed to Kubernetes.</div>
                <div className="mt-6 underline"><a target="_blank" href="https://github.com/easternlai/elai-portfolio-app/blob/main/.github/workflows/git_to_eks.yaml">github workflow</a></div>
            </div>
        </div >
    )
}

export default TechPage;