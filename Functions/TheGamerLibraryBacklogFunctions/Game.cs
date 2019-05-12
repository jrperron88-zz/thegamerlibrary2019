using System;
using System.Collections.Generic;
using System.Text;

namespace TheGamerLibraryBacklogFunctions
{
    public class Game
    {
        public Game() { }

        public Game(int gameId, string title)
            => (id, name) = (gameId, title);

        public int id { get; set; }
        public string name { get; set; }

        public override string ToString() => name;
    }
}
