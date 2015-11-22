//Program for Yellow Team

//Goalie Left
function goalieYellow()
{
    console.log(api.ballIntensity());
    if(api.onLine()){
        api.move(api.lineAngle()+180 , SPEED);
    }
    else{
        api.setDribbler(false);
        var ballAngle=api.ballAngle();
        if(api.distance(api.distance.BACK)>(60+LEFT))
            ballAngle = 180;
        else if(ballAngle>180||ballAngle<0)
            ballAngle=270;
        else
            ballAngle=90;
        api.move(ballAngle, SPEED);

        if(api.ballInDribbler())
            api.shoot();
    }
}

//Striker Left
function strikerYellow()
{
    if (api.onLine()) {
        api.move(api.lineAngle() + 180, SPEED);
    }
    else {

        var angle = api.ballAngle();
        if (angle > 180)
            angle -= 360;
        if (api.ballInDribbler()) {
            angle = 0;
            if (Math.abs(api.distance(api.distance.LEFT) - api.distance(api.distance.RIGHT)) < GOAL_WIDTH) {
                api.setDribbler(false);
                api.shoot();
            }
            else {
                api.setDribbler(true);
            }
        }
        else{
            if (Math.abs(angle) > 90)
                angle = 180 - (Math.atan(5 / (api.ballDistanceCM())) * 180 / Math.PI);
            else if (Math.abs(angle) > 60)
                angle *= 2;
            else
                angle *= 2;
        }
        api.move(angle, SPEED);
    }
}
