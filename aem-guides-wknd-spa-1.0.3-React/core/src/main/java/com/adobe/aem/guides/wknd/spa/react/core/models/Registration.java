package com.adobe.aem.guides.wknd.spa.react.core.models;
import com.adobe.cq.export.json.ComponentExporter;


public interface Registration  extends ComponentExporter {
    public String getFirstName();
    public String getLastName();
    public String getDOB();
    public String getSuggestion();
    public String getImage();

}
