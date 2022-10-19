using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Azure.Storage.Blob;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace BlobTriggerDemoProject
{
    public class Function1
    {
        [FunctionName("Function1")]
        public void Run([BlobTrigger("dev/{name}", Connection = "AzureWebJobsStorage")] Stream myBlob, string name, ILogger log, string blobTrigger, Uri Uri, BlobProperties Properties, IDictionary<string, string> Metadata)
        {
            StreamReader reader = new StreamReader(myBlob);

            log.LogInformation($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes \n Content:{reader.ReadToEnd()} \n BlobTrigger: {blobTrigger} \n Uri: {Uri}\n Properties: {Properties.LastModified}\n Metadata: {Metadata.FirstOrDefault()}");
        }
    }
}
