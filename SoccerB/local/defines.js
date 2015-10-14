var canvas = document.getElementById('canvasField');
var ctx = canvas.getContext("2d");
var feldImage = new Image();
var ballImage = new Image();

const SPEED=3;
const LEFT=100;
const RIGHT=ctx.canvas.width-100;
const TOP=100;
const BOTTOM = ctx.canvas.height-100;
const ROBOTS = 1;
const SHOOT_POWER = 1.0;
const STRAFRAUM_WIDTH = 90;
const STRAFRAUM_HEIGHT  = 270;
const GOAL_WIDTH = 180;
const ROBOT_SIZE = 33;
const BALL_SIZE = 14;

const NEUTRAL_POSITION = new Vector(140, 78);

const NEUTRAL_POINT= [new Vector(NEUTRAL_POSITION.x+120, NEUTRAL_POSITION.y+120),
                                    new Vector(NEUTRAL_POSITION.x+120, ctx.canvas.height-NEUTRAL_POSITION.y-120),
                                    new Vector(ctx.canvas.width-NEUTRAL_POSITION.x-120, NEUTRAL_POSITION.y+120),
                                    new Vector(ctx.canvas.width-NEUTRAL_POSITION.x-120, ctx.canvas.height-NEUTRAL_POSITION.y-120)];


