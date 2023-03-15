package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface CustomTitle extends ComponentExporter  {
    public String getTextTitle();
    public String getText();
    public String getImage();
    
}