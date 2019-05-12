using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;

namespace TheGamerLibraryBacklogFunctions
{
    public static class GamesFunction
    {
        [FunctionName("GamesFunction")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string name = req.Query["name"];

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            name = name ?? data?.name;

            return new OkObjectResult(await GetGames(name));
        }

        public static async Task<IEnumerable<Game>> GetGames(string name)
        {
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("user-key", "7e9ccf0bfd05e2701fb3a3092db1c30c");

                StringContent requestData = new StringContent("fields name; search \""+name+"\";");

                var response = await client.PostAsync(String.Format("https://api-v3.igdb.com/games"), requestData);
                var result = await response.Content.ReadAsStringAsync();
                List<Game> games = JsonConvert.DeserializeObject<List<Game>>(result);
                return games;
            }
        }
    }
}
