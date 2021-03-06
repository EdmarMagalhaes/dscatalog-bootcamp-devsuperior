import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../Baseform';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type ForEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '1',
        description: ''
    });
 
    const handleOnChange = (event: ForEvent) => {
        const name = event.target.name;
        const value = event.target.value;
            
        setFormData(data => ({ ...data, [name]:value }));
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
        ...formData,
        imgUrl: 'https://images0.kabum.com.br/produtos/fotos/128560/console-microsoft-xbox-series-x-1tb-preto-rrt-00006_1601067029_g.jpg',
        categories: [{id: formData.category}]
        }

   makeRequest({url: '/products', method: 'POST', data: payload})
   .then(() => {
       setFormData({ name: '', category: '', price: '', description: ''});
   });
    
}
    
    return (
    <form onSubmit={handleSubmit}>
        <BaseForm title="cadastrar um produto">
            <div className="row">
                <div className="col-6">
                <input 
                    value={formData.name}
                    name="name"
                    type="text" 
                    className="form-control" 
                    onChange={handleOnChange}
                    placeholder="Nome do produto"
                />
                <select 
                    value={formData.category}
                    className="form-control my-5" onChange={handleOnChange}
                    name="category"
                >
                    <option value="1">Livros</option>
                    <option value="3">Computadores</option>
                    <option value="2">Eletrônicos</option>
                </select>
                <input 
                    value={formData.price}
                    name="price"
                    type="text" 
                    className="form-control" 
                    onChange={handleOnChange}
                    placeholder="Preço"
                />
                </div>
                <div className="col6">
                    <textarea 
                     name="description" 
                     value={formData.description}
                     onChange={handleOnChange}
                     className="form-control"
                     cols={30}
                     rows={10} />
                </div>
            </div>
        </BaseForm>
    </form>    
    )
}

export default Form;