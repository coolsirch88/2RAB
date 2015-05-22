using System;

namespace TwoRooms.Common.Models
{
    public class Card
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
        public string BottomText { get; set; }
        public string PictureUrl { get; set; }
    }
}