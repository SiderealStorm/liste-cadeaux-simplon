import { HttpClient } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Present } from "../models/present.model";

@Injectable ({
    providedIn : 'root'
})
export class PresentService {

    jsonUrl: string = "http://localhost:3000/data/";

    constructor(private http : HttpClient) {}

    // Get favourites from Json db
    refreshList() : Observable<Present[]> {
        return this.http.get<Present[]>(this.jsonUrl)
    }

    // Add a present idea to the Json favourites list
    addFavourite(presentIdea : Present) : Observable<any> {
        const headers = {'content-type': 'application/json'};
        const favourite : Present = {
            nom : presentIdea.nom,
            description : presentIdea.description,
            prix : presentIdea.prix
        }
        return this.http.post(this.jsonUrl, favourite, {'headers':headers});
    }

    // Delete a present idea from the Json favourites list
    removeFavourite(presentIdea : Present) {
        this.http.delete(this.jsonUrl + presentIdea.id).subscribe();
    }

    
}