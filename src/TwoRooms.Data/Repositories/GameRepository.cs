using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TwoRooms.Common;
using TwoRooms.Common.Models;
using MongoDB.Driver;
using MongoDB.Bson;

namespace TwoRooms.Data.Repositories
{
    public class GameRepository : IGameRepository
    {
        private MongoClient _client { get; set; }
        private IMongoDatabase _database { get; set; }
        public GameRepository() : this("mongodb://localhost", "2RAB") { }

        public GameRepository(string client) : this(client, "2RAB") { }
        public GameRepository(string client, string db)
        {
            _client = new MongoClient(client);
            _database = _client.GetDatabase(db);
        }
        public async Task<Game> CreateGame(Game create)
        {
            var gameCollection = _database.GetCollection<Game>("games");
            await gameCollection.InsertOneAsync(create);
            var list = await gameCollection.Find(x => x.Name == create.Name).ToListAsync();
            return list.FirstOrDefault();
        }

        public Task<Game> FindGame(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Game>> RetrieveGames()
        {
            var gameCollection = _database.GetCollection<Game>("games");
            return await gameCollection.Find(x => true).ToListAsync();
        }
    }
}
