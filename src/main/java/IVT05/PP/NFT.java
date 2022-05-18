package IVT05.PP;

public class NFT {
    private long id;
    private String name;
    private String subname;
    private String img;
    private double cost;

    NFT(long id, String name, String subname, String img, double cost) {
        this.name = name;
        this.subname = subname;
        this.img = img;
        this.id = id;
        this.cost = cost;
    }
    NFT() {
        this.id = 0;
        this.name = "default";
        this.cost = 0;
    }

    public void setId(long id) {
        this.id = id;
    }
    public void setCost(double cost) {
        this.cost = cost;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setSubname(String subname) {
        this.subname = subname;
    }
    public void setImg(String img) {
        this.img = img;
    }
    public String getImg() {
        return img;
    }
    public String getSubname() {
        return subname;
    }
    public double getCost() {
        return cost;
    }
    public long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
}
