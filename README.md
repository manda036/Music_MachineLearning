# Music_MachineLearning
Data Analytics and Visualization Final Project

Creating an Environment for Deployment:

Step one: In your terminal create a new python virtual environment for us to use for running our app on with the following command: "conda create -n Spotify python=3.6"

Step two: Activate the environment in order to download our necessary libraries. "source activate Spotify"

Step three: Download the following libraries using "pip install": gunicorn, pyscopg2, flask, pandas, spotipy. I will update this list if any other libraries are needed for the project.

Step four: Conduct the following steps in your terminal to have your new environment be a kernel in Jupyter Notebook: "conda install ipykernel". Enter "y" when asked to proceed. Once your environment is solved, insert command: "ipython kernel install --user --name=Spotify". And finally "conda deactivate". When you open your Jupyter Notebook, you should see Spotify as a Kernel option.
