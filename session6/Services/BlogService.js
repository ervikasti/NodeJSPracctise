class BlogService {
    constructor(BlogModel){
        this.BlogModel = BlogModel;
    }

    async createBlog({title, content, author}){
        
        try {
            const newBlog = new this.BlogModel({title, content, author});
            return await newBlog.save();  
        } catch (error) {
            return error;
        }
    }
}