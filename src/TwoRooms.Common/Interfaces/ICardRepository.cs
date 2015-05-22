using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TwoRooms.Common.Models;

namespace TwoRooms.Common.Interfaces
{
    public interface ICardRepository
    {
        List<Card> RetrieveCards();
        Card FindCard(Guid id);
        Guid CreateCard(Card create);
    }
}
