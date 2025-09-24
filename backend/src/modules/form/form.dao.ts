import FormSchema from "./formSchema";
import formInterface from "./form.interface";
class FormDao {
    async getForms() {
        return await FormSchema.find();
    }
    async createForm(form: formInterface) {
        const newForm = new FormSchema(form);
        return await newForm.save();
    }
    async deleteForm(formId: number) {
        return await FormSchema.deleteOne({ formId: formId });
    }
}

export default FormDao;