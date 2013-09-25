README
======

Overview
--------

This project contains templates of (and actual versions of) reports for Startup Canada's sponsors and stakeholders.

Project Structure
-----------------

Each folder contains a single `index.html` file, which is the report. Folders are named according to the pattern `/SPONSOR_YYYY_MM/`. The global styles are contained in the `/css/` directory, and similarly, the global javascript libraries are contained in `/js/`.

Technical Details
-----------------

The template for each report is built on [Twitter Bootstrap](http://getbootstrap.com), which is an open source CSS framework. Custom styles are contained in `/css/styles.css`. 

Javascript is handled using [JQuery](http://jquery.org) and [ChartJS](http://chartjs.org). ChartJS's documentation website has very straightforward instructions detailing how to use their chart objects.

Deploying
---------

The reports are deployed via FTP to Startup Canada's webserver, in the `/sponsor-reports/` directory. 

