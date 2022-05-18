package IVT05.PP;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class NFTController {
    List<NFT> allNFT = Arrays.asList(
            new NFT(1, "name1", "subname1", "img1", 1),
            new NFT(2, "name2", "subname2", "img2", 2),
            new NFT(3, "name3", "subname3", "img3", 3)
    );

    @RequestMapping("/NFT")
    public List<NFT> getAll() {
        return allNFT;
    }
}
