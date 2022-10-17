# Welcome to HacktoberFest
Hacktoberfest is for everyone. It is a month-long celebration from October 1st - 31st sponsored by Digital Ocean and GitHub to get people involved in [Open Source](https://github.com/open-source). Create your very first pull request to any public repository on GitHub and contribute to the open source developer community.

## Basics of Git and GitHub

### Git & GitHub

Before we proceed, it's better to know the difference between Git and Github. Git is a version control system (VCS) that allows us to keep track of the history of our source code , whereas GitHub is a service that hosts Git projects. 

We assume you have created an account on Github and installed Git on your System.

Now enter your name and E-mail (used on Github) address in Git, by using following command.

`$ git config --global user.name "YOUR NAME"`
` $ git config --global user.email "YOUR EMAIL ADDRESS"`
This is an important step to mark your commits to your name and email.


### Fork a project

You can make a copy of the project to your account. This process is called forking a project to your Github account. On Upper right side of project page on Github, you can see -

Click on fork to create a copy of project to your account. This creates a separate copy for you to work on.


### Clone the forked project

You have forked the project you want to contribute to your github account. To get this project on your development machine we use clone command of git.

`$ git clone https://github.com/kavyanshpandey/Sneha-cafe-FRONT-END.git` <br/>
Now you have the project on your local machine.


### Add a remote (upstream) to original project repository

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

`$ cd <your-forked-project-folder>`
`$ git remote add upstream https://github.com/kavyanshpandey/Sneha-cafe-FRONT-END.git` <br/>
You will see the benefits of adding remote later.

### Synchronizing your fork

Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.

`$ git checkout main`
`$ git fetch upstream`
`$ git merge upstream/main`
`$ git push origin main` 
The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.


### Create a new branch for a feature or bugfix

Usually, all repositories have a main branch that is regarded to be stable, and any new features should be developed on a separate branch before being merged into the main branch. As a result, we should establish a new branch for our feature or bugfix and go to work on the issue. 

`$ git checkout -b <feature-branch>`
This will create a new branch out of master branch. Now start working on the problem and commit your changes.

`$ git add --all`
`$ git commit -m "<commit message>"`
The first command adds all the files or you can add specific files by removing -a and adding the file names. The second command gives a message to your changes so you can know in future what changes this commit makes. If you are solving an issue on original repository, you should add the issue number like #35 to your commit message. This will show the reference to commits in the issue.


### Push code and create a pull request

You now have a new branch containing the modifications you want in the project you forked. Now, push your new branch to your remote github fork. 

`$ git push origin <feature-branch>`
Now you are ready to help the project by opening a pull request means you now tell the project managers to add the feature or bug fix to original repository. You can open a pull request by clicking on green icon -

Remember your upstream base branch should be main and source should be your feature branch. Click on create pull request and add a name to your pull request. You can also describe your feature.

Fantastic! You've already made your first contribution.🥳

#### BE OPEN!

#### Happy Coding 👩‍💻👩‍💻

# Contributing to Sneha-Cafe Website||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

First off, thanks for taking the time to contribute! ❤️
All types of contributions are encouraged and valued.
Want to contribute but don't know how to get started?
Follow these steps and start contributing now!!

1. Fork this repository.
2. Clone your forked copy of the project(`git clone https://github.com/kavyanshpandey/Sneha-cafe-FRONT-END.git`)
3. Navigate to the project directory(`cd Sneha-cafe-FRONT-END`)
4. Create a new branch(`git checkout -b YourBranchName`)
5. Make changes in source code.
6. Stage your changes(`git add .`) & commit your changes(` git commit -m "<your_commit_message>"`)
7. Push your local commits to the remote repo(` git push origin YourBranchName`)
8. Create a PR