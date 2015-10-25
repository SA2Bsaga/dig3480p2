var GAME_LEVELS = [
  ["                                                                                ",
   "               @                                           ",
   "                                                                                ",
   "                                                                                ",
   "  xxxxx  x     o   x    x   x                              ",
   "  x   x  x        x x    x x                               ",
   "  xxxx   x       x x x    x                                ",
   "  x      x       x   x    x                                ",
   "  x      xxxxx   x   x    x                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "              xxx                                             ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                             o  ",
   "                                                                                ",
   "                                               o o o                            ",
   "                                                                                ",
   "                                                                            xx  ",
   "                                                                         xxx x  ",
   "                        o                                              xxx   x  ",
   "               o                o        xxxxx       xxxxx           xxx     x  ",
   "                        o                                          xxx       x  ",
   "     @       xxxxx             xxx                               xxxxx       x  ",
   "xxxxxxxxxxxxxx   xxxxxxxxxxxxxx   xxxxxxxxxxxx       xxxxxxxxxxxxx   xxxxxxxxx  ",
   "                                              x!!!!!x                           ",
   "                                              x!!!!!x                           ",
   "                                              x!!!!!x                           ",
   "                                              xxxxxxx                           ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                                                    ",
   "                                                                              o             x                       ",
   "                                                                                            x                      ",
   "                                                               o              x           x x x                       ",
   "     @                                       o            o                   x            xxx                          ",
   "              o                                                               x             x                        ",
   "xxxxxxxx                                              o                 x     x                                       ",
   "       xxxxx       o                     o   x                 x        x     x                                        ",
   "           xxxxx                             x                 x        x     x     xxx                                  ",
   "               xxxxxxx                       x            x    x        x     x                                        ",
   "                     xxx             o   x   x            x    x        x     x             o                             ",
   "                       x                 x   x        x   x    x        x     x           x   x           x               ",
   "                       x                 x   x        x   x    x        x     x           x   x                 x           ",
   "                       x    o            x   x        x   x    x        x     x           x   x       x       x              ",
   "                       x             x   x   x        x   x    x        x     x           x   x                             ",
   "                       x        o    x   x   x        x   x    x        x     x           x   x                             ",
   "                       x    x        x   x   x        x   x    x        x     x           x   x                              ",
   "                       x    x        x   x   x        x   x    x        x     x           x   x         x  x                   ",
   "                       x    x   x    x   x   x        x   x    x        x     x           x o x            x                   ",
   "                       x    x   x    x   x   x        x   x    x        x     x           x   x         x  x x                   ",
   "                       x    x   x    x   x   x        x   x    x        x     x           x   x               x                ",
   "                       x    x   x    x   x   x        x   x    x        x     x           x o x                 x              ",
   "                       x    x   x    x   x   x        x   x    x        x     x           x   x                  x             ",
   "                       x    x   x    x   x   x        x   x    x        x     x           x o x      x           x              ",
   "                       x    x   x    x   x   x        x   x    x        x     x           x   x      x   xx                     ",
   "                       x    x   x    x   x   x        x   x    x        x     x           x o x       x                        ",
   "                       x    x   x    x   x   x        x   x    x        x     x           x                               ",
   "                       x    x   x    x   x   x        x   x    x        x     x           x                  o               ",
   "                       x    x   x    x   x   x        x   x    x        x     x           xxxxxxxxxxxxxxxxxxxxxxxx",
   "                       x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "        0                              x x                 !!!        !!!  xxx                                ",
   "                                       x x                 !x!        !x!                                     ",
   "  x     x                            xxx xxx                x          x                                      ",
   "  x     x                             x   x                 x   oooo   x       xxx                            ",
   "  x     x                             x   x                 x          x      x!!!x                           ",
   "  xx    x                             x   x                 xxxxxxxxxxxx       xxx                            ",
   "  x     x                            xx   xx      x   x      x                                                ",
   "  x     x                             x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "  x    xx                             x   x           x                    x!!!x                              ",
   "  x     x                             x   x           x                     xxx                               ",
   "  x     x                            xx   xx          x                                                       ",
   "  xx    x                             x   x= = = =    x            xxx                                        ",
   "  x     x                             x   x           x           x!!!x                                       ",
   "  x     x                             x   x    = = = =x     o      xxx       xxx                              ",
   "  x    xx                            xx   xx          x                     x!!!x                             ",
   "  x     x                      o   o   x   x           x     x                xxv        xxx                   ",
   "  x     x                              x   x           x              x                 x!!!x                  ",
   "  xx    x                      xxx xx  xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "  x     x                      x xxx    x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "  x     x                      x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "  x    xx                     xx           xx                                         xxx                      ",
   "  x     x                      x     x     x                                         x!!!x                xxx  ",
   "  x     x                      x    xxx    x                                          xxx                 x x  ",
   "  xx    x                      x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x     x                      x           x                              x   x                             x  ",
   "  x     x                      xx          x                              x x x                             x  ",
   "  x    xx                                  x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x  @  x            xxx             o o    x                              x         xxx                     x  ",
   "  x     x           xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x  x  x           oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x     x            xxx        xxxxxxxxxxxxxx oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x     x           x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "  rrrrrrr                                                                                                      ",
   "                                                                                                              "],
  ["     x                                                                                                          ",
   "     x                                                                                     o x                 ",
   "     x                                                                                   xxxxx                 ",
   "     x o                                            o     o     o       o                    x                  ",
   "     x                                                                                     x xxx                   ",
   "     x                     o                                                         x x x                     ",
   "     x                                                                               xxxx                      ",
   "     xx           xxx                                                             xx                         ",
   "      xxxx                 x                  xxxxx   xxx   xxx   xxxx     xxxxx xxxxx                          ",
   "        x                                x   x x   !!!   !!!   !!!   x!!!!!x x                                 ",
   "        xxxx                    xxx x xxx x xxx x xxx x xxx x xxx x xxxxx                                     ",
   "           xxx                     x x   x x   x x   x x   x x   x x     x                                     ",
   "             xxxxxx               xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx                                   ",
   "                  xxxxxxx                                                   x                                  ",
   "                        xxxx                                    o            x                                ",
   "                          x x   o                                            x                                 ",
   "                           x   xxx                                           x                                  ",
   "                            x                                                x                                  ",
   "                            x                               xx               x                                  ",
   "                            x       x                              x        x                                  ",
   "                            x                        o                   o   x    x      x                      ",
   "                            x                       xxx       o              x                                  ",
   "                            x         xxx     xx                             x                x                 ",
   "                            x                                            x   x                                  ",
   "                            x                                             xx x                                 ",
   "                            x                                    xxx         x                                  ",
   "                            x                             xx                 x              x                   ",
   "                            x                                                x  x     x                         ",
   "                            x           o           xx                       x                                  ",
   "                            x                 xx                             xxxx                                  ",
   "                            x          xxx         o    @                  xxxx                                  ",
   "                            x    xxx                                         x                                  ",
   "                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
   "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
   "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
   "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
   "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
   "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
   "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"],
   ["                                                              ",
   "                                                               ",
   "                                                               ",
   "  x   x   x   x   x  xx  xx                                          ",
   "   x x   x x   x x   xx  xx                                        ",
   "    x   x x x   x    xx  xx                                         ",
   "    x   x   x   x                                            ",
   "    x   x   x   x    xx  xx                                    ",
   "                                                                 ",
   "                                                                 ",
   "                                                                ",
   "                                                          ",
   "                                                           ", 
   "                                                           "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
