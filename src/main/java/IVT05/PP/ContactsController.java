package IVT05.PP;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ContactsController {

    @RequestMapping("/Contacts")
    public void formRes(@RequestBody String resp) throws Exception{
        System.out.println(resp);
    }
}
