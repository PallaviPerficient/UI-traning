package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface Announcement extends ComponentExporter  {
    

    public String getDescription();

    public String getLinkText();

    public String getLink();

    public String getLinkTarget();


    public String getTitle();
    
}