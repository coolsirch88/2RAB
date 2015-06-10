using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using TwoRooms.Common;
using TwoRooms.Common.Models;

namespace TwoRooms.Web.Controllers
{
    [Route("api/[controller]")]
    public class GamesController : Controller
    {
        private IGameRepository _gameRepo { get; set; }
        public GamesController(IGameRepository repo)
        {
            _gameRepo = repo;
            //test23
        }
        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<Game>> Get()
        {
            var list = await _gameRepo.RetrieveGames();
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<Game> Get(Guid id)
        {
            var game = _gameRepo.FindGame(id);
            return await game;
        }

        // POST api/values
        [HttpPost]
        public async void Post([FromBody]Game value)
        {
            var game = value;
            game.Id = Guid.NewGuid();
            game.CurrentPlayers = null;
            game.Leader = null;
            game = await _gameRepo.CreateGame(game);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Game value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async void Delete(Guid id)
        {
           await _gameRepo.DeleteGame(id);
        }
    }
}
