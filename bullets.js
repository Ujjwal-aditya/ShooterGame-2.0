class Bullet
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.index = 0;
        this.bullet = createSprite(this.x,this.y,10,10);
    }
    update()
    {
        var bulletIndex = "bullets/bullet" + this.index; 
        database.ref(bulletIndex).set({
            x : this.x,
            y : this.y
        });
    }


    shoot1()
    {
        this.y = this.y + 10;
    }

    shoot2()
    {
        this.y = this.y - 10;
    }
}