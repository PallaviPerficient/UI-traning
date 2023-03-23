package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface MultiField extends ComponentExporter {
    public String getTextTitle();
    public String getHeading();
    public String getText();
    public String getImage();
}
