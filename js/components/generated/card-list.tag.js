riot.tag2('card-list', '<div class="card-list"> <loader if="{!isDataLoaded}"></loader> <div if="{isDataLoaded}" class="card-list__card" each="{projects}" data-filter="{name.toLowerCase()} {url.toLowerCase()} {tags.toLowerCase()}"> <a href="{url}" class="card-list__image"> <img riot-src="{imgUrl}" alt="{imgAlt}"> </a> <h2 class="card-list__name"> {name} </h2> <div class="card-list__url"> {url} </div> <a href="#/details/{id}" class="card-list__details"> View Details </a> </div>', '', '', function(opts) {
        var _self=this;
        this.isDataLoaded=false;
        this.projects=[];
        this.on("mount", function() {
            getProjectData().then(function(e) {
                _self.update({
                    isDataLoaded:true,
                    projects:e.projects
                });
            });
        });
}, '{ }');
