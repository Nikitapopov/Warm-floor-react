import * as axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:5000/',
    baseURL: 'https://warm-floor.ey.r.appspot.com/',
});

export const newsAPI = {
    getNews(currentPage, pageSize){
        return instance.get(`novosti?page=${currentPage}&pageSize=${pageSize}`);
    },
    getOneNews(newsNumber){
        return instance.get('novosti/' + newsNumber);
    },
};

export const promoAPI = {
    getPromotions(){
        return instance.get('akczii');
    },
    getPromotion(promotionNumber){
        return instance.get('akczii/' + promotionNumber);
    },
};

export const feedbackAPI = {
    getFeedbacks(){
        return instance.get('otzyvy');
    },
};

export const catalogAPI = {
    getSections(){
        return instance.get('sections');
    },
    getProducts(currentSectionNumber){
        return instance.get('products/' + currentSectionNumber);
    },
    getProduct(currentProductNumber){
        return instance.get('product/' + currentProductNumber);
    },
};

export const breadcrumbsAPI = {
    getSectionNamesById(){
        return instance.get('sectionNames');
    },
    getProductNamesById(){
        return instance.get('productNames');
    },
    getNewsNamesById(){
        return instance.get('newsNames');
    },
    getPromotionsNamesById(){
        return instance.get('promotionNames');
    },
};

export const popularProductsAPI = {
    getPopularProducts(){
        return instance.get('popularProducts');
    }
};

export const mailAPI = {
    sendMail(phone, name, comment){
        return instance.post('mail', {phone, name, comment});
    }
};