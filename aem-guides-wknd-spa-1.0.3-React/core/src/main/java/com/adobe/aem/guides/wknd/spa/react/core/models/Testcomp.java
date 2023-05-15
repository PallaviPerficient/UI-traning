package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface Testcomp extends ComponentExporter  {
    public String getTitle();
    public String getDescription();

}