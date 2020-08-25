import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-build-dashboard',
  templateUrl: './build-dashboard.component.html',
  styleUrls: ['./build-dashboard.component.css']
})
export class BuildDashboardComponent implements OnInit {
  data: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBuildInformation().subscribe(data => {
    //  this.data = {"_class":"org.jenkinsci.plugins.workflow.job.WorkflowJob","actions":[{},{},{},{},{},{},{},{},{},{},{"_class":"com.cloudbees.plugins.credentials.ViewCredentialsAction"}],"description":"","displayName":"mobileBuild","displayNameOrNull":null,"fullDisplayName":"mobileBuild","fullName":"mobileBuild","name":"mobileBuild","url":"http://34.106.159.232/job/mobileBuild/","buildable":true,"builds":[{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":10,"url":"http://34.106.159.232/job/mobileBuild/10/"},{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":9,"url":"http://34.106.159.232/job/mobileBuild/9/"},{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":8,"url":"http://34.106.159.232/job/mobileBuild/8/"},{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":7,"url":"http://34.106.159.232/job/mobileBuild/7/"},{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":6,"url":"http://34.106.159.232/job/mobileBuild/6/"},{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":5,"url":"http://34.106.159.232/job/mobileBuild/5/"},{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":4,"url":"http://34.106.159.232/job/mobileBuild/4/"},{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":3,"url":"http://34.106.159.232/job/mobileBuild/3/"},{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":2,"url":"http://34.106.159.232/job/mobileBuild/2/"},{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":1,"url":"http://34.106.159.232/job/mobileBuild/1/"}],"color":"red","firstBuild":{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":1,"url":"http://34.106.159.232/job/mobileBuild/1/"},"healthReport":[{"description":"Build stability: 1 out of the last 5 builds failed.","iconClassName":"icon-health-60to79","iconUrl":"health-60to79.png","score":80}],"inQueue":false,"keepDependencies":false,"lastBuild":{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":10,"url":"http://34.106.159.232/job/mobileBuild/10/"},"lastCompletedBuild":{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":10,"url":"http://34.106.159.232/job/mobileBuild/10/"},"lastFailedBuild":{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":10,"url":"http://34.106.159.232/job/mobileBuild/10/"},"lastStableBuild":{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":9,"url":"http://34.106.159.232/job/mobileBuild/9/"},"lastSuccessfulBuild":{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":9,"url":"http://34.106.159.232/job/mobileBuild/9/"},"lastUnstableBuild":null,"lastUnsuccessfulBuild":{"_class":"org.jenkinsci.plugins.workflow.job.WorkflowRun","number":10,"url":"http://34.106.159.232/job/mobileBuild/10/"},"nextBuildNumber":11,"property":[{"_class":"org.jenkinsci.plugins.workflow.job.properties.DisableConcurrentBuildsJobProperty"},{"_class":"hudson.model.ParametersDefinitionProperty","parameterDefinitions":[{"_class":"hudson.model.ChoiceParameterDefinition","defaultParameterValue":{"_class":"hudson.model.StringParameterValue","name":"REGION","value":"EU"},"description":"EU: European Union CL: Chile CO: Colombia PA: Panama","name":"REGION","type":"ChoiceParameterDefinition","choices":["EU","CL","CO","PA"]}]}],"queueItem":null,"concurrentBuild":false,"resumeBlocked":false};
      console.log('data is', data);
   });
  }

}
